> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionsworkspace/addobserver(_:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionsworkspace/addobserver(_:))

# addObserver(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```swift
func addObserver(_ observer: any OSSystemExtensionsWorkspaceObserver) throws
```

<a id="discussion"></a>

## Discussion

Start observing changes to System Extension(s) which are enabled or ready to be enabled.

# addObserver:error: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```objectivec
- (BOOL) addObserver:(id<OSSystemExtensionsWorkspaceObserver>) observer error:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Start observing changes to System Extension(s) which are enabled or ready to be enabled.
