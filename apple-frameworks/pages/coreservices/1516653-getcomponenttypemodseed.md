> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516653-getcomponenttypemodseed](https://developer.apple.com/documentation/coreservices/1516653-getcomponenttypemodseed)

# GetComponentTypeModSeed

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
SInt32 GetComponentTypeModSeed(OSType componentType);
```

## Parameters

- `componentType`:

## See Also

### Finding Components

- [CountComponents](1516515-countcomponents.md): Deprecated. Returns the number of registered components that meet the selection criteria specified by your application.
- [FindNextComponent](1516552-findnextcomponent.md): Deprecated. Returns the component identifier for the next registered component that meets the selection criteria specified by your application.
- [GetComponentListModSeed](1516399-getcomponentlistmodseed.md): Deprecated. Allows your application to determine if the list of registered components has changed.
- [ResolveComponentAlias](1516484-resolvecomponentalias.md): Deprecated.
