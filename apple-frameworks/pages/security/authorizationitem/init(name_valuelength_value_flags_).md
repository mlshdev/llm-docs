> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationitem/init(name:valuelength:value:flags:)

# init(name:valueLength:value:flags:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new authorization item.

## Declaration

```swift
init(name: AuthorizationString, valueLength: Int, value: UnsafeMutableRawPointer?, flags: UInt32)
```
