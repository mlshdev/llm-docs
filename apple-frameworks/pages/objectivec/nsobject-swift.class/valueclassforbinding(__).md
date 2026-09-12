> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/valueclassforbinding(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/valueclassforbinding(_:))

# valueClassForBinding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the class of the value that will be returned for the specified binding.

## Declaration

```swift
func valueClassForBinding(_ binding: NSBindingName) -> AnyClass?
```

## Parameters

- `binding`: The name of a binding.

<a id="return-value"></a>

## Return Value

The class of the value that will be returned for `binding`.

<a id="Discussion"></a>

## Discussion

This method is used by Interface Builder to determine the appropriate transformers for a binding.

Implementation of this method is optional.

## See Also

### Managing bindings

- [bind(\_:to:withKeyPath:options:)](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding(\_:)](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding(\_:)](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind(\_:)](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker(\_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

# valueClassForBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the class of the value that will be returned for the specified binding.

## Declaration

```objectivec
- (Class) valueClassForBinding:(NSBindingName) binding;
```

## Parameters

- `binding`: The name of a binding.

<a id="return-value"></a>

## Return Value

The class of the value that will be returned for `binding`.

<a id="Discussion"></a>

## Discussion

This method is used by Interface Builder to determine the appropriate transformers for a binding.

Implementation of this method is optional.

## See Also

### Managing bindings

- [bind:toObject:withKeyPath:options:](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding:](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding:](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind:](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
