> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchchangesoptions/initwithscope:](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesoptions/initwithscope:)

# initWithScope:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a set of options with the specific scope.

## Declaration

```objectivec
- (instancetype) initWithScope:(CKSyncEngineFetchChangesScope *) scope;
```

<a id="discussion"></a>

## Discussion

If you provide a `nil` scope, the default scope is used. The default scope includes everything.
