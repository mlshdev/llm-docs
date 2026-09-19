> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwbrowser/queue

# queue

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The queue on which browser events are delivered.

## Declaration

```swift
final var queue: DispatchQueue? { get }
```

## See Also

### Inspecting Browsers

- [descriptor](descriptor-swift.property.md): The service descriptor with which the browser was initialized.
- [parameters](parameters.md): The parameters with which the browser was initialized.
