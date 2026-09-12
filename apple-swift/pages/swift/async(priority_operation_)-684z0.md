> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/async(priority:operation:)-684z0](https://developer.apple.com/documentation/swift/async(priority:operation:)-684z0)

# async(priority:operation:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Deprecated, available only for source compatibility reasons.

> \`async\` was replaced by \`Task.init\` and will be removed shortly.

## Declaration

```swift
@discardableResult func async<Success>(priority: TaskPriority? = nil, operation: @escaping @isolated(any) @Sendable () async -> Success) -> Task<Success, Never> where Success : Sendable
```

## See Also

### Deprecated Functions

- [async(priority:operation:)](async%28priority_operation_%29-2y0dc.md): Deprecated. Deprecated, available only for source compatibility reasons.
- [asyncDetached(priority:operation:)](asyncdetached%28priority_operation_%29-6wbk6.md): Deprecated. Deprecated, available only for source compatibility reasons.
- [asyncDetached(priority:operation:)](asyncdetached%28priority_operation_%29-79mp7.md): Deprecated. Deprecated, available only for source compatibility reasons.
- [asyncDetached(priority:operation:)](asyncdetached%28priority_operation_%29-79mp7.md): Deprecated. Deprecated, available only for source compatibility reasons.
- [detach(priority:operation:)](detach%28priority_operation_%29-2h9ty.md): Deprecated. Deprecated, available only for source compatibility reasons.
- [detach(priority:operation:)](detach%28priority_operation_%29-4948v.md): Deprecated. Deprecated, available only for source compatibility reasons.
