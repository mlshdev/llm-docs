> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fixedwidthinteger/init(_:)](https://developer.apple.com/documentation/swift/fixedwidthinteger/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Convert from an Backtrace.Address.

## Declaration

```swift
init?(_ address: Backtrace.Address)
```

<a id="discussion"></a>

## Discussion

This initializer will return nil if the address width is larger than the type you are attempting to convert into.
