> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer/init(contentsof:)](https://developer.apple.com/documentation/naturallanguage/nlgazetteer/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a Natural Language gazetteer from a model created with the Create ML framework.

## Declaration

```swift
init(contentsOf url: URL) throws
```

## Parameters

- `url`: The location of the .`mlmodel` file that contains a gazetteer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an [NLGazetteer](../nlgazetteer.md) from an `.mlmodel` file saved by [MLGazetteer](../../createml/mlgazetteer.md) in the `Create ML` framework.

## See Also

### Creating a Gazetteer

- [init(data:)](init%28data_%29.md): Creates a gazetteer from a data instance.
- [init(dictionary:language:)](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [write(\_:language:to:)](write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a Natural Language gazetteer from a model created with the Create ML framework.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location of the .`mlmodel` file that contains a gazetteer.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an [NLGazetteer](../nlgazetteer.md) from an `.mlmodel` file saved by [MLGazetteer](../../createml/mlgazetteer.md) in the `Create ML` framework.

## See Also

### Creating a Gazetteer

- [gazetteerWithContentsOfURL:error:](gazetteerwithcontentsofurl_error_.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [initWithData:error:](init%28data_%29.md): Creates a gazetteer from a data instance.
- [initWithDictionary:language:error:](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [writeGazetteerForDictionary:language:toURL:error:](write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.
