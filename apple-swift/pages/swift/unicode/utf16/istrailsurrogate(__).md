> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf16/istrailsurrogate(_:)](https://developer.apple.com/documentation/swift/unicode/utf16/istrailsurrogate(_:))

# isTrailSurrogate(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the specified code unit is a low-surrogate code unit.

## Declaration

```swift
static func isTrailSurrogate(_ x: Unicode.UTF16.CodeUnit) -> Bool
```

## Parameters

- `x`: A UTF-16 code unit.

<a id="return-value"></a>

## Return Value

`true` if `x` is a low-surrogate code unit; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Here’s an example of checking whether each code unit in a string’s `utf16` view is a trailing surrogate. The `apple` string contains a single emoji character made up of a surrogate pair when encoded in UTF-16.

```swift
let apple = "🍎"
for unit in apple.utf16 {
    print(UTF16.isTrailSurrogate(unit))
}
// Prints "false"
// Prints "true"
```

This method does not validate the encoding of a UTF-16 sequence beyond the specified code unit. Specifically, it does not validate that a high-surrogate code unit precedes `x`.
