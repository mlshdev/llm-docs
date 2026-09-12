> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/remotecallargument/label](https://developer.apple.com/documentation/distributed/remotecallargument/label)

# label

**Framework:** Distributed  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The “argument label” of the argument. The label is the name visible name used in external calls made to this target, e.g. for `func hello(label name: String)` it is `label`.

## Declaration

```swift
let label: String?
```

<a id="discussion"></a>

## Discussion

If no label is specified (i.e. `func hi(name: String)`), the `label`, value is empty, however `effectiveLabel` is equal to the `name`.

In most situations, using `effectiveLabel` is more useful to identify the user-visible name of this argument.
