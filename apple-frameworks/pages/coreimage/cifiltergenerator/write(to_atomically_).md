> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/write(to:atomically:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/write(to:atomically:))

# write(to:atomically:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Archives a filter generator object to a filter generator file.

## Declaration

```swift
func write(to aURL: URL, atomically flag: Bool) -> Bool
```

## Parameters

- `aURL`: A  location for the file generator file.
- `flag`: Pass `true` to specify that Core Image should create an interim file to avoid overwriting an existing file.

<a id="return-value"></a>

## Return Value

Returns `true` if the object is successfully archived to the file.

<a id="Discussion"></a>

## Discussion

Use this method to save your filter chain to a file for later use.

# writeToURL:atomically: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Archives a filter generator object to a filter generator file.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) aURL atomically:(BOOL) flag;
```

## Parameters

- `aURL`: A  location for the file generator file.
- `flag`: Pass `true` to specify that Core Image should create an interim file to avoid overwriting an existing file.

<a id="return-value"></a>

## Return Value

Returns `true` if the object is successfully archived to the file.

<a id="Discussion"></a>

## Discussion

Use this method to save your filter chain to a file for later use.
