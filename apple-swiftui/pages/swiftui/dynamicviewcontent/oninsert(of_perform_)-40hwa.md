> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent/oninsert(of:perform:)-40hwa](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/oninsert(of:perform:)-40hwa)

# onInsert(of:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets the insert action for the dynamic view.

> Use [onInsert(of:perform:)](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/oninsert%28of:perform:%29-418bq) instead.

## Declaration

```swift
func onInsert(of acceptedTypeIdentifiers: [String], perform action: @escaping (Int, [NSItemProvider]) -> Void) -> some DynamicViewContent

```

## Parameters

- `acceptedTypeIdentifiers`: An array of UTI types that the dynamic view supports.
- `action`: A closure that SwiftUI invokes when elements are added to the view. The closure takes two arguments: The first argument is the offset relative to the dynamic view’s underlying collection of data. The second argument is an array of `NSItemProvider` that represents the data that you want to insert.

<a id="return-value"></a>

## Return Value

A view that calls `action` when elements are inserted into the original view.
