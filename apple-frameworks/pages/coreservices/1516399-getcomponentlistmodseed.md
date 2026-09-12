> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516399-getcomponentlistmodseed](https://developer.apple.com/documentation/coreservices/1516399-getcomponentlistmodseed)

# GetComponentListModSeed

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Allows your application to determine if the list of registered components has changed.

## Declaration

```objectivec
SInt32 GetComponentListModSeed(void);
```

<a id="return_value"></a>

## Return Value

The component registration seed number. Each time the Component Manager registers or unregisters a component it generates a new, unique seed number. By comparing the return value to values previously returned by this function, you can determine whether the list has changed. Your application may use this information to rebuild its internal component lists or to trigger other activity that is necessary whenever new components are available.

## See Also

### Finding Components

- [CountComponents](1516515-countcomponents.md): Deprecated. Returns the number of registered components that meet the selection criteria specified by your application.
- [FindNextComponent](1516552-findnextcomponent.md): Deprecated. Returns the component identifier for the next registered component that meets the selection criteria specified by your application.
- [GetComponentTypeModSeed](1516653-getcomponenttypemodseed.md): Deprecated.
- [ResolveComponentAlias](1516484-resolvecomponentalias.md): Deprecated.
