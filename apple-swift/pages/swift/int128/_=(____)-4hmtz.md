> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/_=(_:_:)-4hmtz](https://developer.apple.com/documentation/swift/int128/_=(_:_:)-4hmtz)

# /=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Divides the first value by the second and stores the quotient in the left-hand-side variable.

## Declaration

```swift
static func /= (a: inout Int128, b: Int128)
```

<a id="discussion"></a>

## Discussion

For integer types, any remainder of the division is discarded.

```swift
var x = 21
x /= 5
// x == 4
```
