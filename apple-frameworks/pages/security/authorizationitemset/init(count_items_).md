> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationitemset/init(count:items:)

# init(count:items:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes an authorization item set with the given items.

## Declaration

```swift
init(count: UInt32, items: UnsafeMutablePointer<AuthorizationItem>?)
```

## Parameters

- `count`: The number of items in the `items` array.
- `items`: A pointer to the first authorization item in an array of items.
