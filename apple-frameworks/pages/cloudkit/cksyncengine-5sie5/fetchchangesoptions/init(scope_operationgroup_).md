> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/init(scope:operationgroup:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/fetchchangesoptions/init(scope:operationgroup:))

# init(scope:operationGroup:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new set of fetch changes options.

## Declaration

```swift
init(scope: CKSyncEngine.FetchChangesOptions.Scope = .all, operationGroup: CKOperationGroup? = nil)
```

## Parameters

- `scope`: The scope in which to fetch changes. Defaults to [CKSyncEngine.FetchChangesOptions.Scope.all](scope-swift.enum/all.md).
- `operationGroup`: The operation group to use for the underlying CloudKit operations. If `nil`, a default operation group will be created.
