> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodesymbolinfo/init(imagename:symbolname:location:)](https://developer.apple.com/documentation/xctest/xctsourcecodesymbolinfo/init(imagename:symbolname:location:))

# init(imageName:symbolName:location:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes an instance with a binary image name, source code location, and symbol name.

## Declaration

```swift
init(imageName: String, symbolName: String, location: XCTSourceCodeLocation?)
```

## Parameters

- `imageName`: A string that represents the name of the binary image containing the symbolicated code.
- `symbolName`: A string that represents a human-readable symbol in source code.
- `location`: A representation of a location in source code.

# initWithImageName:symbolName:location: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes an instance with a binary image name, source code location, and symbol name.

## Declaration

```objectivec
- (instancetype) initWithImageName:(NSString *) imageName symbolName:(NSString *) symbolName location:(XCTSourceCodeLocation *) location;
```

## Parameters

- `imageName`: A string that represents the name of the binary image containing the symbolicated code.
- `symbolName`: A string that represents a human-readable symbol in source code.
- `location`: A representation of a location in source code.
