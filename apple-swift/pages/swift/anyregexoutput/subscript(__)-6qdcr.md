> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/anyregexoutput/subscript(_:)-6qdcr

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Accesses the capture with the specified name, if a capture with that name exists.

## Declaration

```swift
subscript(name: String) -> AnyRegexOutput.Element? { get }
```

## Parameters

- `name`: The name of the capture to access.

<a id="return-value"></a>

## Return Value

An element providing information about the capture, if there is a capture named `name`; otherwise, `nil`.
