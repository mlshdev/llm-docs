> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer/init(data:)](https://developer.apple.com/documentation/naturallanguage/nlgazetteer/init(data:))

# init(data:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gazetteer from a data instance.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: A gazetteer contained in a data instance.

## See Also

### Creating a Gazetteer

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [init(dictionary:language:)](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [write(\_:language:to:)](write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

# initWithData:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gazetteer from a data instance.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: A gazetteer contained in a data instance.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating a Gazetteer

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [gazetteerWithContentsOfURL:error:](gazetteerwithcontentsofurl_error_.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [initWithDictionary:language:error:](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [writeGazetteerForDictionary:language:toURL:error:](write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.
