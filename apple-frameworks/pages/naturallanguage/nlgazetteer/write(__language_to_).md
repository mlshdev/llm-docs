> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer/write(_:language:to:)](https://developer.apple.com/documentation/naturallanguage/nlgazetteer/write(_:language:to:))

# write(\_:language:to:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

## Declaration

```swift
class func write(_ dictionary: [String : [String]], language: NLLanguage?, to url: URL) throws
```

## Parameters

- `dictionary`: The dictionary of labels and an array of terms for each label.
- `language`: The language of the text in the dictionary.
- `url`: The location in the file system to which the file should be written.

## See Also

### Creating a Gazetteer

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [init(data:)](init%28data_%29.md): Creates a gazetteer from a data instance.
- [init(dictionary:language:)](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.

# writeGazetteerForDictionary:language:toURL:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.

## Declaration

```objectivec
+ (BOOL) writeGazetteerForDictionary:(NSDictionary<NSString *,NSArray<NSString *> *> *) dictionary language:(NLLanguage) language toURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `dictionary`: The dictionary of labels and an array of terms for each label.
- `language`: The language of the text in the dictionary.
- `url`: The location in the file system to which the file should be written.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Creating a Gazetteer

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [gazetteerWithContentsOfURL:error:](gazetteerwithcontentsofurl_error_.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [initWithData:error:](init%28data_%29.md): Creates a gazetteer from a data instance.
- [initWithDictionary:language:error:](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
