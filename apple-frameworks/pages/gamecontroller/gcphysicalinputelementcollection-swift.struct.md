> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-swift.struct](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-swift.struct)

# GCPhysicalInputElementCollection

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

A collection of physical input elements.

## Declaration

```swift
struct GCPhysicalInputElementCollection<T> where T : GCPhysicalInputElement
```

## Topics

### Accessing elements by name

- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-1twjd.md): Conforms when `T` is `any GCDirectionPadElement`. Accesses a contiguous subrange of a collection of direction pad elements.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-8m218.md): Conforms when `T` is `any GCAxisElement`. Accesses a contiguous subrange of a collection of axis elements.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-3l6nj.md): Conforms when `T` is `any GCButtonElement`. Accesses a contiguous subrange of a collection of button elements.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-4oje0.md): Conforms when `T` is `any GCSwitchElement`. Accesses a contiguous subrange of a collection of switch elements.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-85c13.md): Conforms when `T` is `any GCPhysicalInputElement`.

### Subscripts

- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-3tv91.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-3womp.md): Conforms when `T` conforms to `GCPhysicalInputElement`. Accesses the collection’s elements using the element’s name.
- [subscript(\_:)](gcphysicalinputelementcollection-swift.struct/subscript%28__%29-c5v9.md): Conforms when `T` conforms to `GCPhysicalInputElement`. Accesses the collection’s elements using the element’s name.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Elements

- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.
