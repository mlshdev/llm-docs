> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfplugin-information-property-list-keys

# Information Property List Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

A plug-in’s information property list can contain these keys used for registering types, factories, and interfaces.

## Topics

### Constants

- [kCFPlugInDynamicRegistrationKey](kcfplugindynamicregistrationkey.md): Indicates whether a plug-in requires dynamic registration.
- [kCFPlugInDynamicRegisterFunctionKey](kcfplugindynamicregisterfunctionkey.md): Used to specify a plug-in’s registration function.
- [kCFPlugInUnloadFunctionKey](kcfpluginunloadfunctionkey.md): Used to specify a plug-in’s unload function.
- [kCFPlugInFactoriesKey](kcfpluginfactorieskey.md): Used to statically register factory functions.
- [kCFPlugInTypesKey](kcfplugintypeskey.md): Used to statically register the factories that can create each supported type.
