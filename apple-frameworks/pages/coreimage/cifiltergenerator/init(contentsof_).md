> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/init(contentsof:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a filter generator object with the contents of a filter generator file.

## Declaration

```swift
init?(contentsOf aURL: URL)
```

## Parameters

- `aURL`: The location of a filter generator file.

<a id="return-value"></a>

## Return Value

The initialized [CIFilterGenerator](../cifiltergenerator.md) object. Returns `nil` if the file can’t be read.

# initWithContentsOfURL: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a filter generator object with the contents of a filter generator file.

## Declaration

```objectivec
- (id) initWithContentsOfURL:(NSURL *) aURL;
```

## Parameters

- `aURL`: The location of a filter generator file.

<a id="return-value"></a>

## Return Value

The initialized [CIFilterGenerator](../cifiltergenerator.md) object. Returns `nil` if the file can’t be read.

## See Also

### Related Documentation

- [filterGeneratorWithContentsOfURL:](filtergeneratorwithcontentsofurl_.md): Creates and returns a filter generator object and initializes it with the contents of a filter generator file.
- [filterGenerator](filtergenerator.md): Creates and returns an empty filter generator object.
