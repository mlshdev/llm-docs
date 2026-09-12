> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472521-connection_manager_attribute_sel](https://developer.apple.com/documentation/coreservices/1472521-connection_manager_attribute_sel)

# Connection Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Connection Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltConnMgrAttr](1472521-connection_manager_attribute_sel/gestaltconnmgrattr.md)
- [gestaltConnMgrPresent](1472521-connection_manager_attribute_sel/gestaltconnmgrpresent.md)
- [gestaltConnMgrCMSearchFix](1472521-connection_manager_attribute_sel/gestaltconnmgrcmsearchfix.md): The `gestaltConnMgrCMSearchFix` bit flag indicates that the fix is present that allows the `CMAddSearch` function to work over the `mAttn` channel.
- [gestaltConnMgrErrorString](1472521-connection_manager_attribute_sel/gestaltconnmgrerrorstring.md)
- [gestaltConnMgrMultiAsyncIO](1472521-connection_manager_attribute_sel/gestaltconnmgrmultiasyncio.md)
