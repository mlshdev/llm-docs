> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/infoforbinding(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/infoforbinding(_:))

# infoForBinding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns a dictionary describing the receiver’s `binding`.

## Declaration

```swift
func infoForBinding(_ binding: NSBindingName) -> [NSBindingInfoKey : Any]?
```

## Parameters

- `binding`: The name of a binding.

<a id="return-value"></a>

## Return Value

A dictionary with information about `binding`, or `nil` if the binding is not bound. The dictionary contains three key/value pairs: `NSObservedObjectKey`: object bound, `NSObservedKeyPathKey`: key path bound, `NSOptionsKey`: dictionary with the options and their values for the bindings.

<a id="Discussion"></a>

## Discussion

This method is mostly for use by subclasses which want to analyze the existing bindings of an object.

## See Also

### Managing bindings

- [valueClassForBinding(\_:)](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind(\_:to:withKeyPath:options:)](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding(\_:)](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind(\_:)](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker(\_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

# infoForBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns a dictionary describing the receiver’s `binding`.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) infoForBinding:(NSBindingName) binding;
```

## Parameters

- `binding`: The name of a binding.

<a id="return-value"></a>

## Return Value

A dictionary with information about `binding`, or `nil` if the binding is not bound. The dictionary contains three key/value pairs: `NSObservedObjectKey`: object bound, `NSObservedKeyPathKey`: key path bound, `NSOptionsKey`: dictionary with the options and their values for the bindings.

<a id="Discussion"></a>

## Discussion

This method is mostly for use by subclasses which want to analyze the existing bindings of an object.

## See Also

### Managing bindings

- [valueClassForBinding:](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [bind:toObject:withKeyPath:options:](bind%28__to_withkeypath_options_%29.md): Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.
- [optionDescriptionsForBinding:](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind:](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
