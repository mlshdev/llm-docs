> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebystringinterpolation/init(stringinterpolation:)](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation/init(stringinterpolation:))

# init(stringInterpolation:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance from a string interpolation.

## Declaration

```swift
init(stringInterpolation: Self.StringInterpolation)
```

## Parameters

- `stringInterpolation`: An instance of `StringInterpolation` which has had each segment of the string literal appended to it.

<a id="discussion"></a>

## Discussion

Most `StringInterpolation` types will store information about the literals and interpolations appended to them in one or more properties. `init(stringInterpolation:)` should use these properties to initialize the instance.

## Default Implementations

### ExpressibleByStringInterpolation Implementations

- [init(stringInterpolation:)](init%28stringinterpolation_%29-hhnp.md): Conforms when `StringInterpolation` is `DefaultStringInterpolation`. Creates a new instance from an interpolated string literal.
