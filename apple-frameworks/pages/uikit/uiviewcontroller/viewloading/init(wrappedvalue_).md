> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/viewloading/init(wrappedvalue:)

# init(wrappedValue:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS · Swift 5.1+

Creates a property wrapper that loads the view controller’s view before accessing the property.

## Declaration

```swift
init(wrappedValue: Value)
```

## Parameters

- `wrappedValue`: The underlying value tied to the loading of the view.

## See Also

### Creating a ViewLoading property wrapper

- [init()](init%28%29.md): Creates an empty property wrapper that loads the view controller’s view before accessing the property.
