> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fstaskoptions/url(foroption:)](https://developer.apple.com/documentation/fskit/fstaskoptions/url(foroption:))

# url(forOption:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Retrieves a URL for a given option.

## Declaration

```swift
func url(forOption option: String) -> URL?
```

## Parameters

- `option`: The option for which to retrieve the URL. This value doesn’t include leading dashes.

<a id="discussion"></a>

## Discussion

Some command-line options refer to paths that indicate a location in which the module needs access to a file outside of its container. FSKit passes these paths as a URL tagged by the option name.

For example, `"-B" "./someFile"` returns the URL for `./someFile` when passed an option `"B"`. To indicate that your module treats a given option as a path, include it in the `pathOptions` dictionary within a command options dictionary (`FSActivatOptionSyntax`, `FSCheckOptionSyntax`, or `FSFormatOptionSyntax`). This dictionary uses the command option name as a key, and each entry has a value indicating what kind of entry to create.

# urlForOption: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Retrieves a URL for a given option.

## Declaration

```objectivec
- (NSURL *) urlForOption:(NSString *) option;
```

## Parameters

- `option`: The option for which to retrieve the URL. This value doesn’t include leading dashes.

<a id="discussion"></a>

## Discussion

Some command-line options refer to paths that indicate a location in which the module needs access to a file outside of its container. FSKit passes these paths as a URL tagged by the option name.

For example, `"-B" "./someFile"` returns the URL for `./someFile` when passed an option `"B"`. To indicate that your module treats a given option as a path, include it in the `pathOptions` dictionary within a command options dictionary (`FSActivatOptionSyntax`, `FSCheckOptionSyntax`, or `FSFormatOptionSyntax`). This dictionary uses the command option name as a key, and each entry has a value indicating what kind of entry to create.
