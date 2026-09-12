> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516552-findnextcomponent](https://developer.apple.com/documentation/coreservices/1516552-findnextcomponent)

# FindNextComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the component identifier for the next registered component that meets the selection criteria specified by your application.

## Declaration

```objectivec
Component FindNextComponent(Component aComponent, ComponentDescription *looking);
```

## Parameters

- `aComponent`: The starting point for the search. Set this field to 0 to start the search at the beginning of the component list. If you are continuing a search, you can specify a component identifier previously returned by this function. The function then searches the remaining components.
- `looking`: A pointer to a [ComponentDescription](componentdescription.md) structure. Your application specifies the criteria for the component search in the fields of this structure.

  The Component Manager ignores fields in the component description structure that are set to 0. For example, if you set all the fields to 0, all components meet the search criteria. In this case, your application can retrieve information about all of the components that are registered in the system by repeatedly calling `FindNextComponent` and [GetComponentInfo](1516438-getcomponentinfo.md) until the search is complete. Similarly, if you set all fields to 0 except for the `componentManufacturer` field, the Component Manager searches all registered components for a component supplied by the manufacturer you specify. Note that this function does not modify the contents of the component description structure you supply. To retrieve detailed information about a component, you need to use the [GetComponentInfo](1516438-getcomponentinfo.md) function to get the component description structure for each returned component.

<a id="return_value"></a>

## Return Value

The component identifier of a component that meets the search criteria or 0 when there are no more matching components. Your application can use the component identifier returned by this function to get more information about the component, using `GetComponentInfo`, or to open the component, using either the [OpenDefaultComponent](1516523-opendefaultcomponent.md) function or the [OpenComponent](1516607-opencomponent.md) function. See the description of the `Component` data type.

## See Also

### Finding Components

- [CountComponents](1516515-countcomponents.md): Deprecated. Returns the number of registered components that meet the selection criteria specified by your application.
- [GetComponentListModSeed](1516399-getcomponentlistmodseed.md): Deprecated. Allows your application to determine if the list of registered components has changed.
- [GetComponentTypeModSeed](1516653-getcomponenttypemodseed.md): Deprecated.
- [ResolveComponentAlias](1516484-resolvecomponentalias.md): Deprecated.
