> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1575008-osunserializebinary

# OSUnserializeBinary

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
OSObjectPtr OSUnserializeBinary(const void *buffer, size_t bufferSize);
```

```objectivec
OSPtr<OSObject> OSUnserializeBinary(const char *buffer, size_t bufferSize, OSString **errorString);
```

## See Also

### Serialization

- [OSUnserialize](1584516-osunserialize.md)
- [OSUnserializeXML](1584515-osunserializexml.md)
