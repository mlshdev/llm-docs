> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/unbind(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/unbind(_:))

# unbind(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Removes a given binding between the receiver and a controller.

## Declaration

```swift
func unbind(_ binding: NSBindingName)
```

## Parameters

- `binding`: The name of a binding.

## See Also

### Managing bindings

- [valueClassForBinding(\_:)](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind(\_:to:withKeyPath:options:)](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding(\_:)](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding(\_:)](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [NSIsControllerMarker(\_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

# unbind: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Removes a given binding between the receiver and a controller.

## Declaration

```objectivec
- (void) unbind:(NSBindingName) binding;
```

## Parameters

- `binding`: The name of a binding.

## See Also

### Managing bindings

- [valueClassForBinding:](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind:toObject:withKeyPath:options:](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding:](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding:](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [NSIsControllerMarker](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
