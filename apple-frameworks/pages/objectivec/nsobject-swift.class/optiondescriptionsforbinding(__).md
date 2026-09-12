> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/optiondescriptionsforbinding(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/optiondescriptionsforbinding(_:))

# optionDescriptionsForBinding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an array describing the options for the specified binding.

## Declaration

```swift
func optionDescriptionsForBinding(_ binding: NSBindingName) -> [NSAttributeDescription]
```

## Parameters

- `binding`: The name of a binding

<a id="return-value"></a>

## Return Value

Returns an array of [NSAttributeDescription](../../coredata/nsattributedescription.md) that describe the options for `binding`.

<a id="Discussion"></a>

## Discussion

The [NSAttributeDescription](../../coredata/nsattributedescription.md) instances in the array are used by Interface Builder to build the options editor user interface of the bindings inspector.

- The option name displayed for the option in the bindings inspector is based on the value of the [NSAttributeDescription](../../coredata/nsattributedescription.md) method [name](../../coredata/nspropertydescription/name.md).
- The type of editor displayed for the option in the bindings inspector is based on the value of the  [NSAttributeDescription](../../coredata/nsattributedescription.md) method [attributeType](../../coredata/nsattributedescription/attributetype-swift.property.md).
- The default value displayed in the bindings inspector for the option is based on the value of the [NSAttributeDescription](../../coredata/nsattributedescription.md) method [defaultValue](../../coredata/nsattributedescription/defaultvalue.md).

## See Also

### Managing bindings

- [valueClassForBinding(\_:)](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind(\_:to:withKeyPath:options:)](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [infoForBinding(\_:)](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind(\_:)](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker(\_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

# optionDescriptionsForBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an array describing the options for the specified binding.

## Declaration

```objectivec
- (NSArray<NSAttributeDescription *> *) optionDescriptionsForBinding:(NSBindingName) binding;
```

## Parameters

- `binding`: The name of a binding

<a id="return-value"></a>

## Return Value

Returns an array of [NSAttributeDescription](../../coredata/nsattributedescription.md) that describe the options for `binding`.

<a id="Discussion"></a>

## Discussion

The [NSAttributeDescription](../../coredata/nsattributedescription.md) instances in the array are used by Interface Builder to build the options editor user interface of the bindings inspector.

- The option name displayed for the option in the bindings inspector is based on the value of the [NSAttributeDescription](../../coredata/nsattributedescription.md) method [name](../../coredata/nspropertydescription/name.md).
- The type of editor displayed for the option in the bindings inspector is based on the value of the  [NSAttributeDescription](../../coredata/nsattributedescription.md) method [attributeType](../../coredata/nsattributedescription/attributetype-swift.property.md).
- The default value displayed in the bindings inspector for the option is based on the value of the [NSAttributeDescription](../../coredata/nsattributedescription.md) method [defaultValue](../../coredata/nsattributedescription/defaultvalue.md).

## See Also

### Managing bindings

- [valueClassForBinding:](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind:toObject:withKeyPath:options:](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [infoForBinding:](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind:](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
