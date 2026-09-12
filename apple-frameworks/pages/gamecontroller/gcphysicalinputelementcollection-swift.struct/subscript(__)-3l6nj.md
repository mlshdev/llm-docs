> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-swift.struct/subscript(_:)-3l6nj](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-swift.struct/subscript(_:)-3l6nj)

# subscript(\_:)

**Framework:** Game Controller  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Accesses a contiguous subrange of a collection of button elements.

## Declaration

```swift
subscript(elementName: GCButtonElementName) -> T? { get }
```

## See Also

### Accessing elements by name

- [subscript(\_:)](subscript%28__%29-1twjd.md): Conforms when `T` is `any GCDirectionPadElement`. Accesses a contiguous subrange of a collection of direction pad elements.
- [subscript(\_:)](subscript%28__%29-8m218.md): Conforms when `T` is `any GCAxisElement`. Accesses a contiguous subrange of a collection of axis elements.
- [subscript(\_:)](subscript%28__%29-4oje0.md): Conforms when `T` is `any GCSwitchElement`. Accesses a contiguous subrange of a collection of switch elements.
- [subscript(\_:)](subscript%28__%29-85c13.md): Conforms when `T` is `any GCPhysicalInputElement`.
