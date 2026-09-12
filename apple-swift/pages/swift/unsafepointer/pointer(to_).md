> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafepointer/pointer(to:)](https://developer.apple.com/documentation/swift/unsafepointer/pointer(to:))

# pointer(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Obtain a pointer to the stored property referred to by a key path.

## Declaration

```swift
func pointer<Property>(to property: KeyPath<Pointee, Property>) -> UnsafePointer<Property>?
```

## Parameters

- `property`: A `KeyPath` whose `Root` is `Pointee`.

<a id="return-value"></a>

## Return Value

A pointer to the stored property represented by the key path, or `nil`.

<a id="discussion"></a>

## Discussion

If the key path represents a computed property, this function will return `nil`.
