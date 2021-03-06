import { ChildProcess } from "child_process";

export interface Bundler {
  microAppName: string;
  entity: string;
  uiType: string;
}

export interface BundlerByEntity {
  microAppName: string;
  uiType: string;
}

export interface ComponentProcess {
  name: string;
  process?: ChildProcess;
  syncResults?: Buffer | string;
}

export interface MfEntity {
  name: string;
  domain?: string;
  prefix?: string;
}

export interface CommandConfig {
  componentsPath: string;
  componentName?: string;
  mfEntities?: MfEntity[];
  componentProcess(
    name: string,
    componentsPath?: string,
    entityConfig?: MfEntity
  ): Promise<ComponentProcess>;
  postProcess?(
    results: ComponentProcess[],
    componentsPath?: string
  ): Promise<void>;
  sequential?: boolean;
}
