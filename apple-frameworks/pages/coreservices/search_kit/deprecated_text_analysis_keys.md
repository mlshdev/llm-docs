> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/search_kit/deprecated_text_analysis_keys

# Deprecated Text Analysis Keys

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Search Kit ignores the `kSKLanguageTypes` constant. It determines language directly by document content.

<a id="overview"></a>

## Overview

In releases of macOS prior to version 10.4, the `kSKLanguageTypes` constant was an optional key in an index’s text analysis properties dictionary. Starting in OS X v10.4, Search Kit ignores this constant and determines language directly by the document content. A document may use multiple languages.

## Topics

### Constants

- [kSKLanguageTypes](../ksklanguagetypes.md): Deprecated.
