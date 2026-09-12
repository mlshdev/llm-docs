> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472053-admin_attribute_selectors](https://developer.apple.com/documentation/coreservices/1472053-admin_attribute_selectors)

# Admin Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for Macintosh Manager administration software.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAdminFeaturesFlagsAttr](1472053-admin_attribute_selectors/gestaltadminfeaturesflagsattr.md): The `Gestalt` selector you pass to determine the admin features that are present. This selector is typically used by the system.
- [gestaltFinderUsesSpecialOpenFoldersFile](1472053-admin_attribute_selectors/gestaltfinderusesspecialopenfoldersfile.md): Specifies that the Finder uses a special file to store the list of open folders.
