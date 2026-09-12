> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1584516-osunserialize](https://developer.apple.com/documentation/kernel/1584516-osunserialize)

# OSUnserialize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSPtr<OSObject> OSUnserialize(const char *buffer, OSString **errorString);
```

## See Also

### Serialization

- [OSUnserializeBinary](1575008-osunserializebinary.md)
- [OSUnserializeXML](1584515-osunserializexml.md)
