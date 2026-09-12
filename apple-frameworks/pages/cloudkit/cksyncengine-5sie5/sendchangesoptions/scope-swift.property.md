> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/scope-swift.property](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchangesoptions/scope-swift.property)

# scope

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The scope of the changes to send.

## Declaration

```swift
var scope: CKSyncEngine.SendChangesOptions.Scope { get set }
```

<a id="discussion"></a>

## Discussion

When creating the next batch of changes to send to the server, consult this and only send changes within this scope.
