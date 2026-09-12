> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/alloweddirectoriesandfiles](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/alloweddirectoriesandfiles)

# allowedDirectoriesAndFiles (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of directories and files that remain visible in the Finder during an assessment.

## Declaration

```swift
var allowedDirectoriesAndFiles: Set<URL>? { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `nil`, which leaves Finder unrestricted. Setting a non-`nil` set hides everything except the given locations; pass an empty set to hide all of them.

This restricts what the Finder displays. It doesn’t sandbox participants, which can still reach other paths programmatically. Entries that aren’t file URLs are ignored.

# allowedDirectoriesAndFiles (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of directories and files that remain visible in the Finder during an assessment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSSet<NSURL *> * allowedDirectoriesAndFiles;
```

<a id="discussion"></a>

## Discussion

Defaults to `nil`, which leaves Finder unrestricted. Setting a non-`nil` set hides everything except the given locations; pass an empty set to hide all of them.

This restricts what the Finder displays. It doesn’t sandbox participants, which can still reach other paths programmatically. Entries that aren’t file URLs are ignored.
