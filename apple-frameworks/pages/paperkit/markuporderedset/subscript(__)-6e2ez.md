> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/subscript(_:)-6e2ez](https://developer.apple.com/documentation/paperkit/markuporderedset/subscript(_:)-6e2ez)

# subscript(\_:)

**Framework:** PaperKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Accesses the element for the given id.

## Declaration

```swift
subscript<T>(id: MarkupID<T>) -> T? where T : Markup { get set }
```

## See Also

### Accessing elements

- [subscript(\_:)](subscript%28__%29-1h73t.md): Accesses the stroke for the given id.
- [subscript(\_:)](subscript%28__%29-79x8r.md): Accesses the element for the given id.
- [ids](ids.md): A view of the set’s element ids.
- [strokes](strokes.md): The strokes in the set.
- [count](count.md): The number of elements in the set.
