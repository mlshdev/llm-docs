> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565368-fsopeniterator](https://developer.apple.com/documentation/coreservices/1565368-fsopeniterator)

# FSOpenIterator

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSOpenIterator(const FSRef *container, FSIteratorFlags iteratorFlags, FSIterator *iterator);
```

## See Also

### Opening and Closing Catalog Iterators

- [FSCloseIterator](1566681-fscloseiterator.md): Deprecated.
- [PBCloseIteratorAsync](1566055-pbcloseiteratorasync.md): Deprecated.
- [PBOpenIteratorAsync](1566686-pbopeniteratorasync.md): Deprecated.
- [PBOpenIteratorSync](1566865-pbopeniteratorsync.md): Deprecated.
- [PBCloseIteratorSync](1566452-pbcloseiteratorsync.md): Deprecated.
