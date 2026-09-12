> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/exposedbindings](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exposedbindings)

# exposedBindings (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array containing the bindings exposed by the receiver.

## Declaration

```swift
var exposedBindings: [NSBindingName] { get }
```

<a id="return-value"></a>

## Return Value

An array containing the bindings exposed by the receiver.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to remove bindings that are exposed by a superclass that are not appropriate for the subclass.

## See Also

### Exposing bindings

- [exposeBinding(\_:)](exposebinding%28__%29.md): Exposes the specified `binding`, advertising its availability.

# exposedBindings (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array containing the bindings exposed by the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * exposedBindings;
```

<a id="return-value"></a>

## Return Value

An array containing the bindings exposed by the receiver.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to remove bindings that are exposed by a superclass that are not appropriate for the subclass.

## See Also

### Exposing bindings

- [exposeBinding:](exposebinding%28__%29.md): Exposes the specified `binding`, advertising its availability.
