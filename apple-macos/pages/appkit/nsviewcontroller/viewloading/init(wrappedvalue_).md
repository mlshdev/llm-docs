> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsviewcontroller/viewloading/init(wrappedvalue:)

# init(wrappedValue:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.3+ · Swift 5.1+

Creates a property wrapper that loads the view controller’s view before accessing the property.

## Declaration

```swift
init(wrappedValue: Value)
```

## Parameters

- `wrappedValue`: The underlying value tied to the loading of the view.

## See Also

### Creating a ViewLoading Property Wrapper

- [init()](init%28%29.md): Creates an empty property wrapper that loads the view controller’s view before accessing the property.
