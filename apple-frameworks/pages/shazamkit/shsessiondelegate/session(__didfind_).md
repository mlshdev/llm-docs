> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsessiondelegate/session(_:didfind:)](https://developer.apple.com/documentation/shazamkit/shsessiondelegate/session(_:didfind:))

# session(\_:didFind:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Tells the delegate that the query signature matches an item in the catalog.

## Declaration

```swift
optional func session(_ session: SHSession, didFind match: SHMatch)
```

## Parameters

- `session`: The session object that performs the match.
- `match`: The matching items from the catalog.

## See Also

### Handling matches

- [session(\_:didNotFindMatchFor:error:)](session%28__didnotfindmatchfor_error_%29.md): Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.

# session:didFindMatch: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Tells the delegate that the query signature matches an item in the catalog.

## Declaration

```objectivec
- (void) session:(SHSession *) session didFindMatch:(SHMatch *) match;
```

## Parameters

- `session`: The session object that performs the match.
- `match`: The matching items from the catalog.

## See Also

### Handling matches

- [session:didNotFindMatchForSignature:error:](session%28__didnotfindmatchfor_error_%29.md): Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.
