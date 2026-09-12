> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/bind(_:to:withkeypath:options:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/bind(_:to:withkeypath:options:))

# bind(\_:to:withKeyPath:options:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.

## Declaration

```swift
func bind(_ binding: NSBindingName, to observable: Any, withKeyPath keyPath: String, options: [NSBindingOption : Any]? = nil)
```

## Parameters

- `binding`: The key path for a property of the receiver previously exposed using the [exposeBinding(\_:)](exposebinding%28__%29.md) method.
- `observable`: The bound-to object.
- `keyPath`: A key path to a property reachable from `observableController`. The elements in the path must be key-value observing compliant (see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i)).
- `options`: A dictionary containing options for the binding, such as placeholder objects or an `NSValueTransformer` identifier as described in Constants. This value is optional—pass `nil` to specify no options.

## See Also

### Managing bindings

- [valueClassForBinding(\_:)](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [optionDescriptionsForBinding(\_:)](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding(\_:)](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind(\_:)](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker(\_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

# bind:toObject:withKeyPath:options: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Establishes a binding between a given property of the receiver and the property of a given object specified by a given key path.

## Declaration

```objectivec
- (void) bind:(NSBindingName) binding toObject:(id) observable withKeyPath:(NSString *) keyPath options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `binding`: The key path for a property of the receiver previously exposed using the [exposeBinding:](exposebinding%28__%29.md) method.
- `observable`: The bound-to object.
- `keyPath`: A key path to a property reachable from `observableController`. The elements in the path must be key-value observing compliant (see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i)).
- `options`: A dictionary containing options for the binding, such as placeholder objects or an `NSValueTransformer` identifier as described in Constants. This value is optional—pass `nil` to specify no options.

## See Also

### Managing bindings

- [valueClassForBinding:](valueclassforbinding%28__%29.md): Returns the class of the value that will be returned for the specified binding.
- [optionDescriptionsForBinding:](optiondescriptionsforbinding%28__%29.md): Returns an array describing the options for the specified binding.
- [infoForBinding:](infoforbinding%28__%29.md): Returns a dictionary describing the receiver’s `binding`.
- [NSBindingInfoKey](https://developer.apple.com/documentation/appkit/nsbindinginfokey)
- [unbind:](unbind%28__%29.md): Removes a given binding between the receiver and a controller.
- [NSIsControllerMarker](https://developer.apple.com/documentation/appkit/nsiscontrollermarker%28_:%29): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
