> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtraccessgrant/init(fornodeid:privilege:)

# init(forNodeID:privilege:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
init?(forNodeID nodeID: NSNumber, privilege: MTRAccessControlEntryPrivilege)
```

# accessGrantForNodeID:privilege: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
+ (MTRAccessGrant *) accessGrantForNodeID:(NSNumber *) nodeID privilege:(MTRAccessControlEntryPrivilege) privilege;
```
