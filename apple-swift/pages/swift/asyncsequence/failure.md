> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/failure](https://developer.apple.com/documentation/swift/asyncsequence/failure)

# Failure

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type of errors produced when iteration over the sequence fails.

## Declaration

```swift
associatedtype Failure = any Error where Self.Failure == Self.AsyncIterator.Failure
```
