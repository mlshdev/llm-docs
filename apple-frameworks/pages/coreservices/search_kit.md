> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/search_kit](https://developer.apple.com/documentation/coreservices/search_kit)

# Search Kit (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Index and search natural language documents.

<a id="overview"></a>

## Overview

Search Kit is a powerful and streamlined C language framework for indexing and searching text in most human languages. It provides fast information retrieval in System Preferences, Address Book, Help Viewer, and Xcode. Apple’s Spotlight technology is built on top of Search Kit to provide content searching in Finder, Mail, and the Spotlight menu. 

You can use Search Kit or Spotlight to provide similar functionality and powerful information-access capabilities within your Mac OS X application. The Search Kit API is appropriate when you want your application to have full control over indexing and searching, and when your focus is file content. Search Kit is thread-safe and works with Cocoa, Carbon, and command-line tools. 

Beginning with Mac OS X version 10.4, Search Kit supports phrase searches, prefix/suffix/substring searches, improved Boolean searches, and improved relevance ranking. Search Kit now uses Spotlight’s metadata importers when indexing documents, and takes advantage of any additional importers available on a system. Searching and indexing are much faster with Search Kit’s new asynchronous search APIs. And, starting in Mac OS X v10.4, Search Kit provides a summarization API that supplants Find By Content.

<a id="1680581"></a>

### Overview

Search Kit is a powerful and streamlined C language framework for indexing and searching text in most human languages. It provides fast information retrieval in System Preferences, Address Book, Help Viewer, and Xcode. Apple’s Spotlight technology is built on top of Search Kit to provide content searching in Finder, Mail, and the Spotlight menu.

You can use Search Kit or Spotlight to provide similar functionality and powerful information-access capabilities within your Mac app. Search Kit is appropriate when you want your application to have full control over indexing and searching, and when your focus is file content. Search Kit is thread-safe and works with Cocoa and command-line tools.

Search Kit supports phrase searches, prefix/suffix/substring searches, Boolean searches, summarization, and relevance ranking. Search Kit uses Spotlight’s metadata importers when indexing documents and takes advantage of any additional importers available on a system.

## Topics

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL(\_:\_:\_:\_:)](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData(\_:\_:\_:\_:)](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData(\_:\_:)](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData(\_:\_:)](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL(\_:\_:\_:)](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose(\_:)](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType(\_:)](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID()](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

### Managing Indexes

- [SKIndexAddDocumentWithText(\_:\_:\_:\_:)](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocument](skdocument.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush(\_:)](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact(\_:)](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount(\_:)](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID(\_:)](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID(\_:)](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate(\_:\_:)](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocument](skdocument.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext(\_:)](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocument](skdocument.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID()](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties(\_:)](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument(\_:\_:\_:)](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexRemoveDocument(\_:\_:)](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocument](skdocument.md)) and its children, if any, from an index.
- [SKIndexRenameDocument(\_:\_:\_:)](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush(\_:\_:)](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush(\_:)](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

### Working With Text Importers

- [SKLoadDefaultExtractorPlugIns()](1447859-skloaddefaultextractorplugins.md): Tells Search Kit to use the Spotlight metadata importers.

### Working with Documents and Terms

- [SKDocumentCreateWithURL(\_:)](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocument](skdocument.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate(\_:\_:\_:)](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocument](skdocument.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL(\_:)](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetName(\_:)](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetParent(\_:)](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetSchemeName(\_:)](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetTypeID()](1448891-skdocumentgettypeid.md): Gets the type identifier for Search Kit document URL objects.
- [SKIndexCopyDocumentForDocumentID(\_:\_:)](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocument](skdocument.md)) from an index.
- [SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:)](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
- [SKIndexCopyDocumentRefsForDocumentIDs(\_:\_:\_:\_:)](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocument](skdocument.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs(\_:\_:\_:\_:)](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID(\_:\_:)](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID(\_:\_:)](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID(\_:\_:)](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString(\_:\_:)](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexSetDocumentProperties(\_:\_:\_:)](1444576-skindexsetdocumentproperties.md): Sets the application-defined properties of a document URL object (of type [SKDocument](skdocument.md)).
- [SKIndexCopyDocumentProperties(\_:\_:)](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState(\_:\_:)](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexGetDocumentTermCount(\_:\_:)](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency(\_:\_:\_:)](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount(\_:\_:)](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID(\_:\_:)](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocument](skdocument.md)) in an index.

### Fast Asynchronous Searching

- [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel(\_:)](1442083-sksearchcancel.md): Cancels an asynchronous search request.
- [SKSearchGetTypeID()](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.

### Working With Summarization

- [SKSummaryCreateWithString(\_:)](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo(\_:\_:\_:\_:\_:)](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo(\_:\_:\_:\_:)](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount(\_:)](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount(\_:)](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex(\_:\_:)](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString(\_:\_:)](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString(\_:\_:)](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID()](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

### Callbacks

- [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md): Deprecated. Use `SKSearchCreate` and `SKSearchFindMatches` instead, which do not use a callback.

### Data Types

- [SKDocument](skdocument.md): Defines an opaque data type representing a document’s URL.
- [SKIndexDocumentIterator](skindexdocumentiterator.md): Defines an opaque data type representing an index-based document iterator.
- [SKIndex](skindex.md): Defines an opaque data type representing an index.
- [SKSearch](sksearch.md): Defines an opaque data type representing an asynchronous search.
- [SKSummary](sksummary.md): Defines an opaque data type representing summarization information.
- [SKDocumentID](skdocumentid.md): Defines an opaque data type representing a lightweight document identifier.
- [SKSearchResults](sksearchresults.md): Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchGroup](sksearchgroup.md): Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

### Constants

- [Text Analysis Keys](search_kit/text_analysis_keys.md): Each of these constants is an optional key in a Search Kit index’s text analysis properties dictionary. The constant descriptions describe the corresponding values for each of these keys. These keys are declared in the `Analysis.h` header file.
- [SKDocumentIndexState](skdocumentindexstate.md): The indexing state of a document.
- [SKSearchOptions](sksearchoptions.md): Specifies the search options available for the [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md) function.
- [SKIndexType](skindextype.md): Specifies the category of an index.
- [SKSearchType](sksearchtype.md): Search Kit ignores the constants in this group. Use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.
- [kSKDocumentStateAddPending](kskdocumentstateaddpending.md): Specifies that the document is not in the index but will be added after the index is flushed or closed.
- [kSKDocumentStateDeletePending](kskdocumentstatedeletepending.md): Specifies that the document is in the index but will be deleted after the index is flushed or closed.
- [kSKDocumentStateIndexed](kskdocumentstateindexed.md): Specifies that the document is indexed.
- [kSKDocumentStateNotIndexed](kskdocumentstatenotindexed.md): Specifies that the document is not indexed.
- [kSKIndexInverted](kskindexinverted.md): Specifies an inverted index, mapping terms to documents.
- [kSKIndexInvertedVector](kskindexinvertedvector.md): Specifies an index type with all the capabilities of an inverted and a vector index.
- [kSKIndexUnknown](kskindexunknown.md): Specifies an unknown index type.
- [kSKIndexVector](kskindexvector.md): Specifies a vector index, mapping documents to terms.
- [kSKSearchBooleanRanked](ksksearchbooleanranked.md): Deprecated. Specifies a query that can include Boolean operators including `'|'`, `'&'`, `'!'`, `'('`, and `')'`.
- [kSKSearchPrefixRanked](ksksearchprefixranked.md): Deprecated. Specifies a prefix-based search, which matches terms that begin with the query string.
- [kSKSearchRanked](ksksearchranked.md): Deprecated. Specifies a basic ranked search.
- [kSKSearchRequiredRanked](ksksearchrequiredranked.md): Deprecated. Specifies a query that can include required (`'+'`) or excluded (`'-'`) terms.

## See Also

### Related Documentation

- [Search Kit Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/SearchKitConcepts/searchKit_intro/searchKit_intro.html#//apple_ref/doc/uid/TP40001071)

# Search Kit (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Index and search natural language documents.

<a id="overview"></a>

## Overview

Search Kit is a powerful and streamlined C language framework for indexing and searching text in most human languages. It provides fast information retrieval in System Preferences, Address Book, Help Viewer, and Xcode. Apple’s Spotlight technology is built on top of Search Kit to provide content searching in Finder, Mail, and the Spotlight menu. 

You can use Search Kit or Spotlight to provide similar functionality and powerful information-access capabilities within your Mac OS X application. The Search Kit API is appropriate when you want your application to have full control over indexing and searching, and when your focus is file content. Search Kit is thread-safe and works with Cocoa, Carbon, and command-line tools. 

Beginning with Mac OS X version 10.4, Search Kit supports phrase searches, prefix/suffix/substring searches, improved Boolean searches, and improved relevance ranking. Search Kit now uses Spotlight’s metadata importers when indexing documents, and takes advantage of any additional importers available on a system. Searching and indexing are much faster with Search Kit’s new asynchronous search APIs. And, starting in Mac OS X v10.4, Search Kit provides a summarization API that supplants Find By Content.

<a id="1680581"></a>

### Overview

Search Kit is a powerful and streamlined C language framework for indexing and searching text in most human languages. It provides fast information retrieval in System Preferences, Address Book, Help Viewer, and Xcode. Apple’s Spotlight technology is built on top of Search Kit to provide content searching in Finder, Mail, and the Spotlight menu.

You can use Search Kit or Spotlight to provide similar functionality and powerful information-access capabilities within your Mac app. Search Kit is appropriate when you want your application to have full control over indexing and searching, and when your focus is file content. Search Kit is thread-safe and works with Cocoa and command-line tools.

Search Kit supports phrase searches, prefix/suffix/substring searches, Boolean searches, summarization, and relevance ranking. Search Kit uses Spotlight’s metadata importers when indexing documents and takes advantage of any additional importers available on a system.

## Topics

### Creating, Opening, and Closing Indexes

- [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md): Creates a named index in a file whose location is specified with a CFURL object.
- [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md): Creates a named index stored in a `CFMutableDataRef` object.
- [SKIndexOpenWithData](1446398-skindexopenwithdata.md): Opens an existing, named index for searching only.
- [SKIndexOpenWithMutableData](1444201-skindexopenwithmutabledata.md): Opens an existing, named index for searching and updating.
- [SKIndexOpenWithURL](1449017-skindexopenwithurl.md): Opens an existing, named index stored in a file whose location is specified with a CFURL object.
- [SKIndexClose](1442401-skindexclose.md): Closes an index.
- [SKIndexGetIndexType](1442236-skindexgetindextype.md): Gets the category of an index.
- [SKIndexGetTypeID](1450223-skindexgettypeid.md): Gets the type identifier for Search Kit indexes.

### Managing Indexes

- [SKIndexAddDocumentWithText](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocumentRef](skdocumentref.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocumentRef](skdocumentref.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexRemoveDocument](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocumentRef](skdocumentref.md)) and its children, if any, from an index.
- [SKIndexRenameDocument](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

### Working With Text Importers

- [SKLoadDefaultExtractorPlugIns](1447859-skloaddefaultextractorplugins.md): Tells Search Kit to use the Spotlight metadata importers.

### Working with Documents and Terms

- [SKDocumentCreateWithURL](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetName](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetParent](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetSchemeName](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetTypeID](1448891-skdocumentgettypeid.md): Gets the type identifier for Search Kit document URL objects.
- [SKIndexCopyDocumentForDocumentID](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index.
- [SKIndexCopyInfoForDocumentIDs](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
- [SKIndexCopyDocumentRefsForDocumentIDs](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocumentRef](skdocumentref.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexSetDocumentProperties](1444576-skindexsetdocumentproperties.md): Sets the application-defined properties of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKIndexCopyDocumentProperties](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexGetDocumentTermCount](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.

### Fast Asynchronous Searching

- [SKSearchCreate](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel](1442083-sksearchcancel.md): Cancels an asynchronous search request.
- [SKSearchGetTypeID](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.

### Working With Summarization

- [SKSummaryCreateWithString](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.

### Callbacks

- [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md): Deprecated. Use `SKSearchCreate` and `SKSearchFindMatches` instead, which do not use a callback.

### Data Types

- [SKDocumentRef](skdocumentref.md): Defines an opaque data type representing a document’s URL.
- [SKIndexDocumentIteratorRef](skindexdocumentiteratorref.md): Defines an opaque data type representing an index-based document iterator.
- [SKIndexRef](skindexref.md): Defines an opaque data type representing an index.
- [SKSearchRef](sksearchref.md): Defines an opaque data type representing an asynchronous search.
- [SKSummaryRef](sksummaryref.md): Defines an opaque data type representing summarization information.
- [SKDocumentID](skdocumentid.md): Defines an opaque data type representing a lightweight document identifier.
- [SKSearchResultsRef](sksearchresultsref.md): Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchGroupRef](sksearchgroupref.md): Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

### Constants

- [Text Analysis Keys](search_kit/text_analysis_keys.md): Each of these constants is an optional key in a Search Kit index’s text analysis properties dictionary. The constant descriptions describe the corresponding values for each of these keys. These keys are declared in the `Analysis.h` header file.
- [SKDocumentIndexState](skdocumentindexstate.md): The indexing state of a document.
- [SKSearchOptions](sksearchoptions.md): Specifies the search options available for the [SKSearchCreate](1443079-sksearchcreate.md) function.
- [SKIndexType](skindextype.md): Specifies the category of an index.
- [Deprecated Text Analysis Keys](search_kit/deprecated_text_analysis_keys.md): Search Kit ignores the `kSKLanguageTypes` constant. It determines language directly by document content.
- [SKSearchType](sksearchtype.md): Search Kit ignores the constants in this group. Use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.
- [kSKDocumentStateAddPending](skdocumentindexstate/kskdocumentstateaddpending.md): Specifies that the document is not in the index but will be added after the index is flushed or closed.
- [kSKDocumentStateDeletePending](skdocumentindexstate/kskdocumentstatedeletepending.md): Specifies that the document is in the index but will be deleted after the index is flushed or closed.
- [kSKDocumentStateIndexed](skdocumentindexstate/kskdocumentstateindexed.md): Specifies that the document is indexed.
- [kSKDocumentStateNotIndexed](skdocumentindexstate/kskdocumentstatenotindexed.md): Specifies that the document is not indexed.
- [kSKIndexInverted](skindextype/kskindexinverted.md): Specifies an inverted index, mapping terms to documents.
- [kSKIndexInvertedVector](skindextype/kskindexinvertedvector.md): Specifies an index type with all the capabilities of an inverted and a vector index.
- [kSKIndexUnknown](skindextype/kskindexunknown.md): Specifies an unknown index type.
- [kSKIndexVector](skindextype/kskindexvector.md): Specifies a vector index, mapping documents to terms.
- [kSKSearchBooleanRanked](sksearchtype/ksksearchbooleanranked.md): Deprecated. Specifies a query that can include Boolean operators including `'|'`, `'&'`, `'!'`, `'('`, and `')'`.
- [kSKSearchPrefixRanked](sksearchtype/ksksearchprefixranked.md): Deprecated. Specifies a prefix-based search, which matches terms that begin with the query string.
- [kSKSearchRanked](sksearchtype/ksksearchranked.md): Deprecated. Specifies a basic ranked search.
- [kSKSearchRequiredRanked](sksearchtype/ksksearchrequiredranked.md): Deprecated. Specifies a query that can include required (`'+'`) or excluded (`'-'`) terms.

## See Also

### Related Documentation

- [Search Kit Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/SearchKitConcepts/searchKit_intro/searchKit_intro.html#//apple_ref/doc/uid/TP40001071)
