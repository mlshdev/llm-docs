> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/exposebinding(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exposebinding(_:))

# exposeBinding(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS

Exposes the specified `binding`, advertising its availability.

## Declaration

```swift
class func exposeBinding(_ binding: NSBindingName)
```

## Parameters

- `binding`: The key path for the property to be exposed.

<a id="Discussion"></a>

## Discussion

The bound property will be accessed using key-value-coding compliant methods. This method is typically invoked in the class’s `initialize` implementation.

Bindings exposed using `exposeBinding` will be exposed automatically in [exposedBindings](exposedbindings.md) unless that method explicitly filters them out, for example in subclasses.

## See Also

### Exposing bindings

- [exposedBindings](exposedbindings.md): Returns an array containing the bindings exposed by the receiver.

# exposeBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS

Exposes the specified `binding`, advertising its availability.

## Declaration

```objectivec
+ (void) exposeBinding:(NSBindingName) binding;
```

## Parameters

- `binding`: The key path for the property to be exposed.

<a id="Discussion"></a>

## Discussion

The bound property will be accessed using key-value-coding compliant methods. This method is typically invoked in the class’s `initialize` implementation.

Bindings exposed using `exposeBinding` will be exposed automatically in [exposedBindings](exposedbindings.md) unless that method explicitly filters them out, for example in subclasses.

## See Also

### Exposing bindings

- [exposedBindings](exposedbindings.md): Returns an array containing the bindings exposed by the receiver.
