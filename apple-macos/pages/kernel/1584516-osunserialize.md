> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1584516-osunserialize

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
