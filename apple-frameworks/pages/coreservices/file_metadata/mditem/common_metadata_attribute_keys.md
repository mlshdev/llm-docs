> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mditem/common_metadata_attribute_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mditem/common_metadata_attribute_keys)

# Common Metadata Attribute Keys (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Metadata attribute keys that are common to many file types.

## Topics

### Constants

- [kMDItemAttributeChangeDate](../../kmditemattributechangedate.md): The date and time of the last change made to a metadata attribute. A CFDate.
- [kMDItemAudiences](../../kmditemaudiences.md): The audience for which the file is intended. The audience may be determined by the creator or the publisher or by a third party. A CFArray of CFStrings.
- [kMDItemAuthors](../../kmditemauthors.md): The author, or authors, of the contents of the file. A CFArray of CFStrings.
- [kMDItemAuthorAddresses](../../kmditemauthoraddresses.md): This attribute indicates the author addresses of the document. A CFArray of CFStrings.
- [kMDItemCity](../../kmditemcity.md): Identifies city of origin according to guidelines established by the provider. A CFString.
- [kMDItemComment](../../kmditemcomment.md): A comment related to the file. This differs from the Finder comment, `kMDItemFinderComment`. A CFString.
- [kMDItemContactKeywords](../../kmditemcontactkeywords.md): A list of contacts that are associated with this document, not including the authors. A CFArray of CFStrings.
- [kMDItemContentCreationDate](../../kmditemcontentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [kMDItemContentModificationDate](../../kmditemcontentmodificationdate.md): The date and time that the contents of the file were last modified. A CFDate.
- [kMDItemContentType](../../kmditemcontenttype.md): The UTI pedigree of a file. A CFString.
- [kMDItemContributors](../../kmditemcontributors.md): The entities responsible for making contributions to the content of the resource. A CFArray of CFStrings.
- [kMDItemCopyright](../../kmditemcopyright.md): The copyright owner of the file contents. A CFString.
- [kMDItemCountry](../../kmditemcountry.md): The full, publishable name of the country or region where the intellectual property of the item was created, according to guidelines of the provider.
- [kMDItemCoverage](../../kmditemcoverage.md): The extent or scope of the content of the resource. A CFString.
- [kMDItemCreator](../../kmditemcreator.md): Application used to create the document content (for example “Word”, “Pages”, and so on). A CFString.
- [kMDItemDescription](../../kmditemdescription.md): A description of the content of the resource. The description may include an abstract, table of contents, reference to a graphical representation of content or a free-text account of the content. A CFString.
- [kMDItemDueDate](../../kmditemduedate.md): Date this item is due. A CFDate.
- [kMDItemDurationSeconds](../../kmditemdurationseconds.md): The duration, in seconds, of the content of file. A value of 10.5 represents media that is 10 and 1/2 seconds long. A CFNumber.
- [kMDItemEmailAddresses](../../kmditememailaddresses.md): Email addresses related to this item. A CFArray of CFStrings.
- [kMDItemEncodingApplications](../../kmditemencodingapplications.md): Application used to convert the original content into it's current form. For example, a PDF file might have an encoding application set to "Distiller". A CFArray of CFStrings.
- [kMDItemFinderComment](../../kmditemfindercomment.md): Finder comments for this file. A CFString.
- [kMDItemFonts](../../kmditemfonts.md): Fonts used in this item. You should store the font's full name, the postscript name, or the font family name, based on the available information. A CFArray of CFStrings.
- [kMDItemHeadline](../../kmditemheadline.md): A publishable entry providing a synopsis of the contents of the file. For example, "Apple Introduces the iPod Photo". A CFString.
- [kMDItemIdentifier](../../kmditemidentifier.md): A formal identifier used to reference the resource within a given context. A CFString.
- [kMDItemInstantMessageAddresses](../../kmditeminstantmessageaddresses.md): Instant message addresses related to this item. A CFArray of CFStrings.
- [kMDItemInstructions](../../kmditeminstructions.md): Editorial instructions concerning the use of the item, such as embargoes and warnings. For example, "Second of four stories". A CFString.
- [kMDItemKeywords](../../kmditemkeywords.md): Keywords associated with this file. For example, “Birthday”, “Important”, etc. An CFArray of CFStrings.
- [kMDItemKind](../../kmditemkind.md): A description of the kind of item this file represents. A CFString.
- [kMDItemLanguages](../../kmditemlanguages.md): Indicates the languages of the intellectual content of the resource. Recommended best practice for the values of the Language element is defined by RFC 3066. A CFArray of CFStrings.
- [kMDItemLastUsedDate](../../kmditemlastuseddate.md): The date and time that the file was last used. This value is updated automatically by LaunchServices everytime a file is opened by double clicking, or by asking LaunchServices to open a file. A CFDate.
- [kMDItemNumberOfPages](../../kmditemnumberofpages.md): Number of pages in the document. A CFNumber.
- [kMDItemOrganizations](../../kmditemorganizations.md): The company or organization that created the document. A CFArray of CFStrings.
- [kMDItemPageHeight](../../kmditempageheight.md): Height of the document page, in points (72 points per inch). For PDF files this indicates the height of the first page only. A CFNumber.
- [kMDItemPageWidth](../../kmditempagewidth.md): Width of the document page, in points (72 points per inch). For PDF files this indicates the width of the first page only. A CFNumber.
- [kMDItemParticipants](../../kmditemparticipants.md): The list of people who are visible in an image or movie or written about in a document. A CFArray of CFStrings.
- [kMDItemPhoneNumbers](../../kmditemphonenumbers.md): Phone numbers related to this item. A CFArray of CFStrings.
- [kMDItemProjects](../../kmditemprojects.md): The list of projects that this file is part of. For example, if you were working on a movie all of the files could be marked as belonging to the project “My Movie”. A CFArray of CFStrings.
- [kMDItemPublishers](../../kmditempublishers.md): The entity responsible for making the resource available. For example, a person, an organization, or a service. Typically, the name of a publisher should be used to indicate the entity. A CFArray of CFStrings.
- [kMDItemRecipients](../../kmditemrecipients.md): Recipients of this item. A CFArray of CFStrings.
- [kMDItemRecipientAddresses](../../kmditemrecipientaddresses.md): This attribute indicates the recipient addresses of the document. A CFArray of CFStrings.
- [kMDItemRights](../../kmditemrights.md): Provides a link to information about rights held in and over the resource. A CFString.
- [kMDItemSecurityMethod](../../kmditemsecuritymethod.md): The security or encryption method used for the file. A CFNumber.
- [kMDItemStarRating](../../kmditemstarrating.md): User rating of this item. For example, the stars rating of an iTunes track. A CFNumber.
- [kMDItemStateOrProvince](../../kmditemstateorprovince.md): Identifies the province or state of origin according to guidelines established by the provider. For example, "CA", "Ontario", or "Sussex". A CFString.
- [kMDItemTextContent](../../kmditemtextcontent.md): Contains a text representation of the content of the document. Data in multiple fields should be combined using a whitespace character as a separator. A CFString.
- [kMDItemTitle](../../kmditemtitle.md): The title of the file. For example, this could be the title of a document, the name of a song, or the subject of an email message. A `CFString`.
- [kMDItemVersion](../../kmditemversion.md): The version number of this file. A CFString
- [kMDItemWhereFroms](../../kmditemwherefroms.md): Describes where the file was obtained from. A CFArray of CFStrings.
- [kMDItemAuthorEmailAddresses](../../kmditemauthoremailaddresses.md): This attribute indicates the author of the emails message addresses. (This is always the email address, and not the human readable version). A CFArray of CFStrings.
- [kMDItemRecipientEmailAddresses](../../kmditemrecipientemailaddresses.md): This attribute indicates the recipients email addresses. (This is always the email address, and not the human readable version). A CFArray of CFStrings.
- [kMDItemTheme](../../kmditemtheme.md): Theme of the this item. A CFString.
- [kMDItemSubject](../../kmditemsubject.md): Subject of the this item. Type is a CFString.
- [kMDItemCFBundleIdentifier](../../kmditemcfbundleidentifier.md): If this item is a bundle, then this is the CFBundleIdentifier. A CFString.
- [kMDItemFSHasCustomIcon](../../kmditemfshascustomicon.md): Boolean indicating if this file has a custom icon. Type is a CFBoolean.
- [kMDItemFSIsStationery](../../kmditemfsisstationery.md): Boolean indicating if this file is stationery. Type is a CFBoolean.
- [kMDItemInformation](../../kmditeminformation.md): Information about the item. A CFString.
- [kMDItemURL](../../kmditemurl.md): Url of the item. A CFString.

# Common Metadata Attribute Keys (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Metadata attribute keys that are common to many file types.

## Topics

### Constants

- [kMDItemAttributeChangeDate](../../kmditemattributechangedate.md): The date and time of the last change made to a metadata attribute. A CFDate.
- [kMDItemAudiences](../../kmditemaudiences.md): The audience for which the file is intended. The audience may be determined by the creator or the publisher or by a third party. A CFArray of CFStrings.
- [kMDItemAuthors](../../kmditemauthors.md): The author, or authors, of the contents of the file. A CFArray of CFStrings.
- [kMDItemAuthorAddresses](../../kmditemauthoraddresses.md): This attribute indicates the author addresses of the document. A CFArray of CFStrings.
- [kMDItemCity](../../kmditemcity.md): Identifies city of origin according to guidelines established by the provider. A CFString.
- [kMDItemComment](../../kmditemcomment.md): A comment related to the file. This differs from the Finder comment, `kMDItemFinderComment`. A CFString.
- [kMDItemContactKeywords](../../kmditemcontactkeywords.md): A list of contacts that are associated with this document, not including the authors. A CFArray of CFStrings.
- [kMDItemContentCreationDate](../../kmditemcontentcreationdate.md): The creation date of an edited or optimized version of the song or composition.
- [kMDItemContentModificationDate](../../kmditemcontentmodificationdate.md): The date and time that the contents of the file were last modified. A CFDate.
- [kMDItemContentType](../../kmditemcontenttype.md): The UTI pedigree of a file. A CFString.
- [kMDItemContributors](../../kmditemcontributors.md): The entities responsible for making contributions to the content of the resource. A CFArray of CFStrings.
- [kMDItemCopyright](../../kmditemcopyright.md): The copyright owner of the file contents. A CFString.
- [kMDItemCountry](../../kmditemcountry.md): The full, publishable name of the country or region where the intellectual property of the item was created, according to guidelines of the provider.
- [kMDItemCoverage](../../kmditemcoverage.md): The extent or scope of the content of the resource. A CFString.
- [kMDItemCreator](../../kmditemcreator.md): Application used to create the document content (for example “Word”, “Pages”, and so on). A CFString.
- [kMDItemDescription](../../kmditemdescription.md): A description of the content of the resource. The description may include an abstract, table of contents, reference to a graphical representation of content or a free-text account of the content. A CFString.
- [kMDItemDueDate](../../kmditemduedate.md): Date this item is due. A CFDate.
- [kMDItemDurationSeconds](../../kmditemdurationseconds.md): The duration, in seconds, of the content of file. A value of 10.5 represents media that is 10 and 1/2 seconds long. A CFNumber.
- [kMDItemEmailAddresses](../../kmditememailaddresses.md): Email addresses related to this item. A CFArray of CFStrings.
- [kMDItemEncodingApplications](../../kmditemencodingapplications.md): Application used to convert the original content into it's current form. For example, a PDF file might have an encoding application set to "Distiller". A CFArray of CFStrings.
- [kMDItemFinderComment](../../kmditemfindercomment.md): Finder comments for this file. A CFString.
- [kMDItemFonts](../../kmditemfonts.md): Fonts used in this item. You should store the font's full name, the postscript name, or the font family name, based on the available information. A CFArray of CFStrings.
- [kMDItemHeadline](../../kmditemheadline.md): A publishable entry providing a synopsis of the contents of the file. For example, "Apple Introduces the iPod Photo". A CFString.
- [kMDItemIdentifier](../../kmditemidentifier.md): A formal identifier used to reference the resource within a given context. A CFString.
- [kMDItemInstantMessageAddresses](../../kmditeminstantmessageaddresses.md): Instant message addresses related to this item. A CFArray of CFStrings.
- [kMDItemInstructions](../../kmditeminstructions.md): Editorial instructions concerning the use of the item, such as embargoes and warnings. For example, "Second of four stories". A CFString.
- [kMDItemKeywords](../../kmditemkeywords.md): Keywords associated with this file. For example, “Birthday”, “Important”, etc. An CFArray of CFStrings.
- [kMDItemKind](../../kmditemkind.md): A description of the kind of item this file represents. A CFString.
- [kMDItemLanguages](../../kmditemlanguages.md): Indicates the languages of the intellectual content of the resource. Recommended best practice for the values of the Language element is defined by RFC 3066. A CFArray of CFStrings.
- [kMDItemLastUsedDate](../../kmditemlastuseddate.md): The date and time that the file was last used. This value is updated automatically by LaunchServices everytime a file is opened by double clicking, or by asking LaunchServices to open a file. A CFDate.
- [kMDItemNumberOfPages](../../kmditemnumberofpages.md): Number of pages in the document. A CFNumber.
- [kMDItemOrganizations](../../kmditemorganizations.md): The company or organization that created the document. A CFArray of CFStrings.
- [kMDItemPageHeight](../../kmditempageheight.md): Height of the document page, in points (72 points per inch). For PDF files this indicates the height of the first page only. A CFNumber.
- [kMDItemPageWidth](../../kmditempagewidth.md): Width of the document page, in points (72 points per inch). For PDF files this indicates the width of the first page only. A CFNumber.
- [kMDItemParticipants](../../kmditemparticipants.md): The list of people who are visible in an image or movie or written about in a document. A CFArray of CFStrings.
- [kMDItemPhoneNumbers](../../kmditemphonenumbers.md): Phone numbers related to this item. A CFArray of CFStrings.
- [kMDItemProjects](../../kmditemprojects.md): The list of projects that this file is part of. For example, if you were working on a movie all of the files could be marked as belonging to the project “My Movie”. A CFArray of CFStrings.
- [kMDItemPublishers](../../kmditempublishers.md): The entity responsible for making the resource available. For example, a person, an organization, or a service. Typically, the name of a publisher should be used to indicate the entity. A CFArray of CFStrings.
- [kMDItemRecipients](../../kmditemrecipients.md): Recipients of this item. A CFArray of CFStrings.
- [kMDItemRecipientAddresses](../../kmditemrecipientaddresses.md): This attribute indicates the recipient addresses of the document. A CFArray of CFStrings.
- [kMDItemRights](../../kmditemrights.md): Provides a link to information about rights held in and over the resource. A CFString.
- [kMDItemSecurityMethod](../../kmditemsecuritymethod.md): The security or encryption method used for the file. A CFNumber.
- [kMDItemStarRating](../../kmditemstarrating.md): User rating of this item. For example, the stars rating of an iTunes track. A CFNumber.
- [kMDItemStateOrProvince](../../kmditemstateorprovince.md): Identifies the province or state of origin according to guidelines established by the provider. For example, "CA", "Ontario", or "Sussex". A CFString.
- [kMDItemTextContent](../../kmditemtextcontent.md): Contains a text representation of the content of the document. Data in multiple fields should be combined using a whitespace character as a separator. A CFString.
- [kMDItemTitle](../../kmditemtitle.md): The title of the file. For example, this could be the title of a document, the name of a song, or the subject of an email message. A `CFString`.
- [kMDItemVersion](../../kmditemversion.md): The version number of this file. A CFString
- [kMDItemWhereFroms](../../kmditemwherefroms.md): Describes where the file was obtained from. A CFArray of CFStrings.
- [kMDItemSupportFileType](../../kmditemsupportfiletype.md): Deprecated. A CFArray of CFStrings.
- [kMDItemAuthorEmailAddresses](../../kmditemauthoremailaddresses.md): This attribute indicates the author of the emails message addresses. (This is always the email address, and not the human readable version). A CFArray of CFStrings.
- [kMDItemRecipientEmailAddresses](../../kmditemrecipientemailaddresses.md): This attribute indicates the recipients email addresses. (This is always the email address, and not the human readable version). A CFArray of CFStrings.
- [kMDItemTheme](../../kmditemtheme.md): Theme of the this item. A CFString.
- [kMDItemSubject](../../kmditemsubject.md): Subject of the this item. Type is a CFString.
- [kMDItemCFBundleIdentifier](../../kmditemcfbundleidentifier.md): If this item is a bundle, then this is the CFBundleIdentifier. A CFString.
- [kMDItemFSHasCustomIcon](../../kmditemfshascustomicon.md): Boolean indicating if this file has a custom icon. Type is a CFBoolean.
- [kMDItemFSIsStationery](../../kmditemfsisstationery.md): Boolean indicating if this file is stationery. Type is a CFBoolean.
- [kMDItemInformation](../../kmditeminformation.md): Information about the item. A CFString.
- [kMDItemURL](../../kmditemurl.md): Url of the item. A CFString.
