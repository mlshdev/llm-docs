> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516438-getcomponentinfo](https://developer.apple.com/documentation/coreservices/1516438-getcomponentinfo)

# GetComponentInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns to your application the registration information for a component.

## Declaration

```objectivec
OSErr GetComponentInfo(Component aComponent, ComponentDescription *cd, Handle componentName, Handle componentInfo, Handle componentIcon);
```

## Parameters

- `aComponent`: The component about which you wish to obtain information. Your application obtains a component identifier from the [FindNextComponent](1516552-findnextcomponent.md) function. If your application registers a component, it can also obtain a component identifier from the [RegisterComponent](1516537-registercomponent.md) or [RegisterComponentResource](1516594-registercomponentresource.md) function.

  You may supply a component instance rather than a component identifier to this function, but you must coerce the data type appropriately. Your application can obtain a component instance from the [OpenComponent](1516607-opencomponent.md) or [OpenDefaultComponent](1516523-opendefaultcomponent.md) functions.
- `cd`: A pointer to a [ComponentDescription](componentdescription.md) structure. The function returns information about the specified component in this structure.
- `componentName`: On return, a handle to the component’s name. If the component does not have a name, an empty handle. Set this field to `NULL` if you do not want to receive the component’s name.
- `componentInfo`: On return, a handle to the component’s information string. If the component does not have an information string, an empty handle. Set this field to `NULL` if you do not want to receive the component’s information string.
- `componentIcon`: On return, a handle to the component’s icon. If the component does not have an icon, an empty handle. Set this field to `NULL` if you do not want to receive the component’s icon. To get a handle to the component’s icon suite, if it provides one, use the `GetComponentIconSuite` function.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

<a id="discussion"></a>

## Discussion

For information on registering components, see “Registering Components”.

## See Also

### Getting Information About Components

- [GetComponentPublicIndString](1516516-getcomponentpublicindstring.md): Deprecated.
- [GetComponentPublicResource](1516336-getcomponentpublicresource.md): Deprecated.
- [GetComponentPublicResourceList](1516460-getcomponentpublicresourcelist.md): Deprecated.
