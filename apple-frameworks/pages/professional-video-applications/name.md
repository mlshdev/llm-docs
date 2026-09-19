> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional-video-applications/name

# name

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Specifies the name of the resource.

<a id="overview"></a>

## Overview

Each resource has a `name` attribute that specifies that resource’s name, which is visible to the user in the Final Cut Pro library. When this attribute is missing, Final Cut Pro tries to derive the name from the resource itself. For example, if an `asset` element is missing the `name` attribute, Final Cut Pro uses the file name of its original media representation.

## See Also

### Resource Element Attributes

- [id](id.md): Specifies a local identifier to use within the FCPXML document.
