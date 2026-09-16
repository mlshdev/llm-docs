> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/string/init(decodingcstring:as:)-534rp

# init(decodingCString:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

> Use String(\_ scalar: Unicode.Scalar)

## Declaration

```swift
init<Encoding>(decodingCString nullTerminatedCodeUnits: inout Encoding.CodeUnit, as encoding: Encoding.Type) where Encoding : _UnicodeEncoding
```
