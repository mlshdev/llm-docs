> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctsourcecodelocation/init(filepath:linenumber:)-8qw52

# init(filePath:lineNumber:)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a new instance with a file path and a line number.

## Declaration

```swift
convenience init(filePath: StaticString = #filePath, lineNumber: UInt = #line)
```

## Parameters

- `filePath`: A string that represents a file path to the source code file.
- `lineNumber`: An integer that represents a line of code in the source code file.

## See Also

### Initializers

- [init(fileURL:lineNumber:)](init%28fileurl_linenumber_%29.md): Initializes a new instance with a file URL and a line number.
- [init(filePath:lineNumber:)](init%28filepath_linenumber_%29-3hzmr.md): Initializes a new instance with a file path and a line number.
