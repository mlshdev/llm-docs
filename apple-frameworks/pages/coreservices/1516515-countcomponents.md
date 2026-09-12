> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516515-countcomponents](https://developer.apple.com/documentation/coreservices/1516515-countcomponents)

# CountComponents

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the number of registered components that meet the selection criteria specified by your application.

## Declaration

```objectivec
long CountComponents(ComponentDescription *looking);
```

## Parameters

- `looking`: A pointer to a [ComponentDescription](componentdescription.md) structure. Your application specifies the criteria for the component search in the fields of this structure.

  The Component Manager ignores fields in the component description structure that are set to 0. For example, if you set all the fields to 0, the Component Manager returns the number of components registered in the system. Similarly, if you set all fields to 0 except for the `componentManufacturer` field, the Component Manager returns the number of registered components supplied by the manufacturer you specify.

<a id="return_value"></a>

## Return Value

The number of components that meet the specified search criteria.

## See Also

### Finding Components

- [FindNextComponent](1516552-findnextcomponent.md): Deprecated. Returns the component identifier for the next registered component that meets the selection criteria specified by your application.
- [GetComponentListModSeed](1516399-getcomponentlistmodseed.md): Deprecated. Allows your application to determine if the list of registered components has changed.
- [GetComponentTypeModSeed](1516653-getcomponenttypemodseed.md): Deprecated.
- [ResolveComponentAlias](1516484-resolvecomponentalias.md): Deprecated.
