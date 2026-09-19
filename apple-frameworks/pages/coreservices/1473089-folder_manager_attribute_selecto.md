> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1473089-folder_manager_attribute_selecto

# Folder Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Folder Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltFindFolderAttr](1473089-folder_manager_attribute_selecto/gestaltfindfolderattr.md): The selector you pass to the `Gestalt` function to determine the `FindFolder` function attributes.
- [gestaltFindFolderPresent](1473089-folder_manager_attribute_selecto/gestaltfindfolderpresent.md)
- [gestaltFolderDescSupport](1473089-folder_manager_attribute_selecto/gestaltfolderdescsupport.md): If this bit is set, the extended Folder Manager functionality supporting folder descriptors and routings is available. This bit is set for versions of the Mac OS starting with Mac OS 8.
- [gestaltFolderMgrFollowsAliasesWhenResolving](1473089-folder_manager_attribute_selecto/gestaltfoldermgrfollowsaliaseswhenresolving.md)
- [gestaltFolderMgrSupportsExtendedCalls](1473089-folder_manager_attribute_selecto/gestaltfoldermgrsupportsextendedcalls.md)
- [gestaltFolderMgrSupportsDomains](1473089-folder_manager_attribute_selecto/gestaltfoldermgrsupportsdomains.md)
- [gestaltFolderMgrSupportsFSCalls](1473089-folder_manager_attribute_selecto/gestaltfoldermgrsupportsfscalls.md)
